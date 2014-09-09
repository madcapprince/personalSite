function printFile(file) {
	var page = window.open('assets/'+file);
	page.print();
}