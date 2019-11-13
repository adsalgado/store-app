package mx.com.sadead.store.service.util;

public class RequestSearchDTO {

	private int page;
	private int size;
	private String sort;
	private String[] sorts;
	private FilterDTO[] filters;
	
	public int getPage() {
		return page;
	}
	public void setPage(int page) {
		this.page = page;
	}
	public int getSize() {
		return size;
	}
	public void setSize(int size) {
		this.size = size;
	}
	public String getSort() {
		return sort;
	}
	public void setSort(String sort) {
		this.sort = sort;
	}
	public FilterDTO[] getFilters() {
		return filters;
	}
	public void setFilters(FilterDTO[] filters) {
		this.filters = filters;
	}
	public String[] getSorts() {
		return sorts;
	}
	public void setSorts(String[] sorts) {
		this.sorts = sorts;
	}
	
}
