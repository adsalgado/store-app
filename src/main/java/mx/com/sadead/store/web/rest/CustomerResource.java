package mx.com.sadead.store.web.rest;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import javax.validation.Valid;

import org.apache.commons.lang3.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.domain.Sort.Order;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.querydsl.core.types.ExpressionUtils;
import com.querydsl.core.types.Predicate;

import io.github.jhipster.web.util.HeaderUtil;
import io.github.jhipster.web.util.PaginationUtil;
import io.github.jhipster.web.util.ResponseUtil;
import mx.com.sadead.store.domain.Customer;
import mx.com.sadead.store.domain.QCustomer;
import mx.com.sadead.store.service.CustomerService;
import mx.com.sadead.store.service.util.FilterDTO;
import mx.com.sadead.store.service.util.RequestSearchDTO;
import mx.com.sadead.store.web.rest.errors.BadRequestAlertException;

/**
 * REST controller for managing {@link mx.com.sadead.store.domain.Customer}.
 */
@RestController
@RequestMapping("/api")
public class CustomerResource {

    private final Logger log = LoggerFactory.getLogger(CustomerResource.class);

    private static final String ENTITY_NAME = "customer";

    @Value("${jhipster.clientApp.name}")
    private String applicationName;

    private final CustomerService customerService;

    public CustomerResource(CustomerService customerService) {
        this.customerService = customerService;
    }

    /**
     * {@code POST  /customers} : Create a new customer.
     *
     * @param customer the customer to create.
     * @return the {@link ResponseEntity} with status {@code 201 (Created)} and with body the new customer, or with status {@code 400 (Bad Request)} if the customer has already an ID.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PostMapping("/customers")
    public ResponseEntity<Customer> createCustomer(@Valid @RequestBody Customer customer) throws URISyntaxException {
        log.debug("REST request to save Customer : {}", customer);
        if (customer.getId() != null) {
            throw new BadRequestAlertException("A new customer cannot already have an ID", ENTITY_NAME, "idexists");
        }
        Customer result = customerService.save(customer);
        return ResponseEntity.created(new URI("/api/customers/" + result.getId()))
            .headers(HeaderUtil.createEntityCreationAlert(applicationName, true, ENTITY_NAME, result.getId().toString()))
            .body(result);
    }

    /**
     * {@code PUT  /customers} : Updates an existing customer.
     *
     * @param customer the customer to update.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the updated customer,
     * or with status {@code 400 (Bad Request)} if the customer is not valid,
     * or with status {@code 500 (Internal Server Error)} if the customer couldn't be updated.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PutMapping("/customers")
    public ResponseEntity<Customer> updateCustomer(@Valid @RequestBody Customer customer) throws URISyntaxException {
        log.debug("REST request to update Customer : {}", customer);
        if (customer.getId() == null) {
            throw new BadRequestAlertException("Invalid id", ENTITY_NAME, "idnull");
        }
        Customer result = customerService.save(customer);
        return ResponseEntity.ok()
            .headers(HeaderUtil.createEntityUpdateAlert(applicationName, true, ENTITY_NAME, customer.getId().toString()))
            .body(result);
    }

    /**
     * {@code GET  /customers} : get all the customers.
     *

     * @param pageable the pagination information.

     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and the list of customers in body.
     */
    @GetMapping("/customers")
    public ResponseEntity<List<Customer>> getAllCustomers(Pageable pageable) {
        log.debug("REST request to get a page of Customers");
        log.info("pageable: {}", pageable);
        Page<Customer> page = customerService.findAll(pageable);
        HttpHeaders headers = PaginationUtil.generatePaginationHttpHeaders(ServletUriComponentsBuilder.fromCurrentRequest(), page);
        return ResponseEntity.ok().headers(headers).body(page.getContent());
    }

    /**
     * {@code GET  /customers/:id} : get the "id" customer.
     *
     * @param id the id of the customer to retrieve.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the customer, or with status {@code 404 (Not Found)}.
     */
    @GetMapping("/customers/{id}")
    public ResponseEntity<Customer> getCustomer(@PathVariable Long id) {
        log.debug("REST request to get Customer : {}", id);
        Optional<Customer> customer = customerService.findOne(id);
        return ResponseUtil.wrapOrNotFound(customer);
    }

    /**
     * {@code DELETE  /customers/:id} : delete the "id" customer.
     *
     * @param id the id of the customer to delete.
     * @return the {@link ResponseEntity} with status {@code 204 (NO_CONTENT)}.
     */
    @DeleteMapping("/customers/{id}")
    public ResponseEntity<Void> deleteCustomer(@PathVariable Long id) {
        log.debug("REST request to delete Customer : {}", id);
        customerService.delete(id);
        return ResponseEntity.noContent().headers(HeaderUtil.createEntityDeletionAlert(applicationName, true, ENTITY_NAME, id.toString())).build();
    }

    /**
     * {@code SEARCH  /_search/customers?query=:query} : search for the customer corresponding
     * to the query.
     *
     * @param query the query of the customer search.
     * @param pageable the pagination information.
     * @return the result of the search.
     */
    @GetMapping("/_search/customers")
    public ResponseEntity<List<Customer>> searchCustomers(@RequestParam String query, Pageable pageable) {
        log.debug("REST request to search for a page of Customers for query {}", query);
        Page<Customer> page = customerService.search(query, pageable);
        HttpHeaders headers = PaginationUtil.generatePaginationHttpHeaders(ServletUriComponentsBuilder.fromCurrentRequest(), page);
        return ResponseEntity.ok().headers(headers).body(page.getContent());
    }
    
    
    /**
     * {@code GET  /customers} : get all the customers.
     *

     * @param pageable the pagination information.

     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and the list of customers in body.
     */
    @PostMapping("/_customSearch/customers")
    public ResponseEntity<List<Customer>> customSearchCustomers(@RequestBody RequestSearchDTO requestSearchDTO) {
        log.debug("REST request to get a page of Customers");
        
        List<Predicate> predicates = new ArrayList<>();
        
        for (FilterDTO filterDto : requestSearchDTO.getFilters()) {
			if (filterDto.getProperty().equals("email")) {
				predicates.add(QCustomer.customer.email.containsIgnoreCase(filterDto.getValue()));				
			} else if (filterDto.getProperty().equals("firstName")) {
				predicates.add(QCustomer.customer.firstName.containsIgnoreCase(filterDto.getValue()));
			}
		}        
        Predicate where = ExpressionUtils.allOf(predicates);       
        
        List<Order> sorts = new ArrayList<>();
        for (int i = 0; i < requestSearchDTO.getSorts().length; i++) {
        	Order sortyBy = null;
        	String[] orders = requestSearchDTO.getSorts()[i].split(",");
            if (orders.length == 2) {
            	if (StringUtils.equals(orders[1], "desc")) {
            		sortyBy = Order.desc(orders[0]);
            	} else {
            		sortyBy = Order.by(orders[0]);
            	}
            } 
            sorts.add(sortyBy); 
		}
        
        Pageable pageabl = PageRequest.of(requestSearchDTO.getPage(), requestSearchDTO.getSize(), Sort.by(sorts));
        log.info("pageable: {}", pageabl);
        Page<Customer> page = customerService.findAll(where, pageabl);
        HttpHeaders headers = PaginationUtil.generatePaginationHttpHeaders(ServletUriComponentsBuilder.fromCurrentRequest(), page);
        return ResponseEntity.ok().headers(headers).body(page.getContent());
    }

}
