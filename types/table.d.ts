type HeadItem = {
	// label will be rendered in UI
	label: string;
	// uses like an id for rows. Quarantee order
	field: string;
}

type RowItem = {
	[ index:string ]: string;
}

type TableData<T> = {
	columns: HeadItem[];
	rows: T[];
}

type TableActions<T> = {
	onRowAdd: () => void;
	onRowEdit: (rowData: T) => void;
	onRowDelete: (rowData: T) => void;
}