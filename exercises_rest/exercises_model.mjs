/**
 * Name: Samuel Bassong Bassong
 */
import mongoose from 'mongoose';
import 'dotenv/config';

const EXERCISE_DB_NAME = 'exercise_db';
const EXERCISE_CLASS = "Exercise"

let connection = undefined;

/**
 * This function connects to the MongoDB server and to the database
 *  'exercise_db' in that server.
 */
async function connect() {
    try {
        connection = await mongoose.connect(process.env.MONGODB_CONNECT_STRING,
            { dbName: EXERCISE_DB_NAME });
        console.log("Successfully connected to MongoDB using Mongoose!");
    } catch (err) {
        console.log(err);
        throw Error(`Could not connect to MongoDB ${err.message}`)
    }
}

/**
 * Define the schema
 */
const exerciseSchema = mongoose.Schema({
    name: { type: String, required: true },
    reps: { type: Number, required: true },
    weight: { type: Number, required: true },
    unit: { type: String, required: true },
    date: { type: String, required: true },
});

/**
 * Compile the model from the schema. This must be done after defining the schema.
 */
const Exercise = mongoose.model(EXERCISE_CLASS, exerciseSchema);


/**
 * Create an exercise
 * @param {String} name
 * @param {Number} reps
 * @param {Number} weight
 * @param {String} unit
 * @param {String} date
 * @returns A promise. Resolves to the JSON object for the document created by calling save
 */
const createExercise = async (name, reps, weight, unit, date) => {
    // Call the constructor to create an instance of the model class Exercise
    const exercise = new Exercise({
        name,
        reps,
        weight,
        unit,
        date
    });
    // Call save to persist this object as a document in MongoDB
    return exercise.save();
};

/**
 * Retrieve all exercises
 * @returns A promise. Resolves to the JSON array of the documents retrieved
 */
const getExercises = async () => {
    const exercises = await Exercise.find({});
    return exercises;
};

/**
 * Find a single exercise based on id
 * @param {String} _id
 * @returns A promise. Resolves to the JSON object for the document retrieved
 */
const findExercise = async (_id) => {
    const exercise = await Exercise.findById(_id);
    return exercise;
};

/**
 * Update a single exercise based on id, using the data object containing new values
 * @param {String} _id
 * @param {Object} data
 * @returns A promise. Resolves to the JSON object for the document updated
 */
const updateExercise = async (_id, data) => {
    const modifiedExercise = await Exercise.updateOne({ _id }, data);
    return modifiedExercise.matchedCount;
};

/**
 * Delete a single exercise based on id
 * @param {String} _id
 * @returns A promise. Resolves to the JSON object for the document deleted
 */
const deleteExercise = async (_id) => {
    const deletedExercise = await Exercise.deleteOne({ _id });
    return deletedExercise.deletedCount;
};

export {
    connect,
    createExercise,
    getExercises,
    findExercise,
    updateExercise,
    deleteExercise
};