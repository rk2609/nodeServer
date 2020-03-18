const handleTrip = (db) => (req, res) => {
	const  { id } = req.params;
	db('cost_list')
	.min('Discount_Cost')
	.where('Trip_Id', '=', id)
	.then(user => {
		if(user.length) {
			res.json(user[0]);	
		} else {
			res.status(400).json('User Not Found');
		}
	})
	.catch(err => res.status(400).json('error getting user'))
}

module.exports = {
	handleTrip: handleTrip
};