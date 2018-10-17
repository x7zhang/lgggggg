import React from 'react';

// material-UI
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';

import Pagination from '../pagination';


class CardFooter extends React.Component {

	render() {
		return (
			<TableFooter>
			    <TableRow>
			        <TablePagination
			          colSpan={3}
			          count={rows.length}
			          rowsPerpage={rowsPerpage}
			          page={Page}
			          onChangePage={this.handlePageChange}
			          onChangeRowsPerPage={this.handleChangeRowsPerPage}
			          ActionsComponent={Pagination}
			        />
			    </TableRow>
			</TableFooter>
			);
	}
};
