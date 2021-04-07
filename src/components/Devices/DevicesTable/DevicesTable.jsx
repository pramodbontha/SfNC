import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const DevicesTable = (props) => {
	return (
		<div>
			<TableContainer component={Paper}>
				<Table stickyHeader aria-label="sticky table">
					<TableHead
						style={{
							backgroundColor: "#3f51b5",
							color: "white",
						}}
					>
						<TableRow>
							<TableCell
								data-testid="tableHeader"
								style={{ backgroundColor: "#3f51b5", color: "white" }}
							>
								Device
							</TableCell>
							<TableCell
								style={{
									backgroundColor: "#3f51b5",
									color: "white",
								}}
							></TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{props.tableData
							? props.tableData.map((row) => (
									<TableRow key={row.deviceId}>
										<TableCell>
											<Typography variant="subtitle2" color="textPrimary">
												{row.deviceName}
											</Typography>
										</TableCell>
										<TableCell align="right">
											<Button
												size="small"
												onClick={() => props.updateDeviceId(row.deviceId)}
												style={{
													backgroundColor: "#3f51b5",
													color: "white",
													textTransform: "none",
												}}
												variant="contained"
												endIcon={<PlayCircleOutlineIcon />}
											>
												Check Readings
											</Button>
										</TableCell>
									</TableRow>
							  ))
							: null}
						<TableRow>
							{props.tableData && !props.tableData.length ? (
								<TableCell style={{ padding: "20px" }}>
									No devices available
								</TableCell>
							) : null}
						</TableRow>
					</TableBody>
				</Table>
			</TableContainer>
		</div>
	);
};

export default DevicesTable;
