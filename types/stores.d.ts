interface I_BooksStore {
	books: I_Book[];

	fetchBooks: () => Promise<I_Book[]>;
	create: (book: I_Book) => Promise<void>;
	updateBookById: (id: number, book: I_Book) => Promise<void>;
	delete: (book: I_Book) => Promise<void>;

	findBookById: (id: number) => I_Book | undefined; 
	checkIsTitleUnique: (title: string) => void;

	private isTitleExists: (title: string) => boolean;
}


/* toast Store */
interface I_BaseToastConf {
	/* this prop won't be passed into the rendered toast (but all others props - be passed */
	type: "info" | "error" | "success";
	/* toast position. See https://material-ui-next.com/api/snackbar/ */
	anchorOrigin?: { 
									horizontal: 'left'| 'center'| 'right', 
									vertical: 'top'| 'bottom'
								 };
}

interface I_ToastDefaultConfig {
	/* after this time (if presented) a toast will be hided */
	autoHideDuration?: number;
	anchorOrigin: {
		vertical: "top" | "bottom",
		horizontal: "center" | "left" | "right"
	}
}

interface I_ToastConf extends I_BaseToastConf, I_ToastDefaultConfig {
	/* a toast content which be shown near the icon. */
	message: string | JSX.Element;
}

interface I_ToastStore {
	open: boolean;
	defaultConfig: I_ToastDefaultConfig;
	/* rendered toast config. Type used only to detect required toast
	 * other props will be passed into the rendered Toast as is
	 */
	config: I_ToastConf;
	setRenderConf: (config: I_ToastConf) => I_ToastStore;
	show: VoidFn;
	hide: VoidFn;
}

/* !toast Store */