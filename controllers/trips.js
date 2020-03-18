const handleTrips = (db) => (req, res) => {
	db.select('*')
	.from('trips_list')
	.orderBy('Id')
	.then(user => {
		if(user.length) {
			console.log(user);
			res.json(user);	
		} else {
			res.status(400).json('User Not Found');
		}
	})
	.catch(err => res.status(400).json('error getting user'))
}

module.exports = {
	handleTrips: handleTrips
};