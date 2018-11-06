import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

import './home.css';

class Home extends Component {
	render() {
		return (
			<div className="container">
				<Grid container spacing={24}>
					<Grid item xs={12}>
						<AppBar position="fixed">
							<Toolbar disableGutters={false}>
								<Grid container spacing={24} className="vertical-middle">
									<Grid item xs={6}>
										<IconButton
											color="inherit"
											aria-label="Open drawer"
											onClick={this.handleDrawerOpen}
										>
											<MenuIcon />
										</IconButton>
										<span>client name</span>
									</Grid>
									<Grid item xs={6} align="right">
										2
									</Grid>
								</Grid>
							</Toolbar>
						</AppBar>
						<Drawer className="side-bar" variant="permanent" open={false}>
							<Divider />
							<List>
								{['Inbox', 'Starred', 'Send email', 'Drafts'].map(
									(text, index) => (
										<ListItem button key={text}>
											<ListItemIcon>
												{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
											</ListItemIcon>
										</ListItem>
									)
								)}
							</List>
							<Divider />
							<List>
								{['All mail', 'Trash', 'Spam'].map((text, index) => (
									<ListItem button key={text}>
										<ListItemIcon>
											{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
										</ListItemIcon>
									</ListItem>
								))}
							</List>
						</Drawer>
						<main>
							<Grid container spacing={24}>
								<Grid item xs={3}>
									<Typography>Sales Order# 87900 New</Typography>
									<Typography>Order No.: 989564</Typography>
								</Grid>
								<Grid item xs={3}>
									<Typography>
										Buyer: <span>Retail Company Co.</span>
									</Typography>
									<Typography>
										Routing: <span>Delivered</span>
									</Typography>
								</Grid>
								<Grid item xs={3}>
									<Typography>
										Ship From: <span>Salinas WH</span>
									</Typography>
									<Typography>Order No.: 989564</Typography>
								</Grid>
								<Grid item xs={3}>
									<Typography>Deliver to: Norther Cal Location</Typography>
									<Typography>Order No.: 989564</Typography>
								</Grid>
							</Grid>
						</main>
					</Grid>
				</Grid>
			</div>
		);
	}
}

export default Home;
