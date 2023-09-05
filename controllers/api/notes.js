const Note = require("../../models/note");
const User = require("../../models/user");

module.exports = {
    index,
    // new: newNote,
    // create, 
    // show
};

// List of all notes in the database
async function index(req, res) {
    try {
        // find all notes in the database
        const notes = await Note.find(req.body._id).sort('-createdAt'); 
        // can use .json to send back a string 
        res.json(notes);
    } catch (err) {
        res.status(400).json('Error');
    }
}

// // will pass on a token to the users-api.jsx
// async function create(req, res) {
//     try {
//         // add our user to the db via req.body
//         const user = await User.create(req.body);
//         const token = createJWT(user);
//         // can use .json to send back a string 
//         // (method to send a JSON response from a server to a client)
//         res.json(token);
//     } catch (err) {
//         res.status(400).json(err);
//         // send the error message to the server so other devs can see the error message in the network tab
//     }
// }



// async function show(req,res) { // show a list of all tickets
//     try {
//         const flight = await Flight.findById(req.params.id); // accessing the flight id
//         const ticket = await Ticket.find({ flight: flight._id}); 
//         res.render('flights/show', { 
//                 title: "Flight details", 
//                 flight,
//                 ticket,
//                 errorMsg: '' })
//     } catch (err) {
//         console.log(err);
//     };
// }

// function newFlight(req, res) { // not taking anything from the db which is why its not async
//     const nFlight = new Flight();
//     const dt = nFlight.departs;
//     // formats the date
//     let departsDate = `${dt.getFullYear()}-${(dt.getMonth() + 1).toString().padStart(2, '0')}`;
//     departsDate += `-${dt.getDate().toString().padStart(2, '0')}T${dt.toTimeString().slice(0, 5)}`;
//     res.render('flights/new', {
//         title: "Add Flight",
//         departsDate,
//         errorMsg: '' // needed to add the error mess 
//     });
// }

// async function create(req, res) {
//     for (let key in req.body) {
//         if (req.body[key] === '') delete req.body[key]; // guard against empty 
//       }
//     try{
//         await Flight.create(req.body)
//         res.redirect('/flights');
//     } catch (err){
//         console.log(err);
//         res.redirect('/flights/new')
//     }
// }
