const handleTrip = (db) => (req, res) => {
	db.select('*')
	.from('trips')
	.orderBy('id')
	.then(user => {
		if(user.length) {
			res.json(user);	
		} else {
			res.status(400).json('User Not Found');
		}
	})
	.catch(err => res.status(400).json('error getting user'))
}

module.exports = {
	handleTrip: handleTrip
};