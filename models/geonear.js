const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const StoreSchema = new Schema({
	name: {
		type: String,
		required: true
    },
  
	address: {
		street: String,
		number: Number,
		city: {
			type: String,
			required: true
		},
		zipCode: {
			type: String,
			required: true
		},
		location: {
			type: {
				type: String,
				enum: ["Point"],
				default: "Point"
			},
			coordinates: {
				type: [Number],
				default: [0, 0]
			}
		}
	},
	createdOn: { type: Date, default: Date.now },
	updatedOn: { type: Date, default: Date.now }
});


StoreSchema.index({ "address.location": "2dsphere" });


StoreSchema.statics.findAll = function() {
	return this.find({});
};



StoreSchema.statics.findByCoordinates = function(coordinates, maxDistance) {
	return this.aggregate([
		{
			$geoNear: {
				near: {
					type: "Point",
					coordinates: coordinates
				},
				maxDistance: maxDistance,
				distanceField: "dist.calculated",
				spherical: true
			}
		}
	]);
};

module.exports = mongoose.model("Store", StoreSchema);
