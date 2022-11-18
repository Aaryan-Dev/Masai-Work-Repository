Here’s an example on how multer is used an HTML form. Take special note of the enctype="multipart/form-data" and name="uploaded_file" fields:

<form action="/stats" enctype="multipart/form-data" method="post">
  <div class="form-group">
    <input type="file" class="form-control-file" name="uploaded_file">
    <input type="text" class="form-control" placeholder="Number of speakers" name="nspeakers">
    <input type="submit" value="Get me the stats!" class="btn btn-default">            
  </div>
</form>
Then in your javascript file you would add these lines to access both the file and the body. It is important that you use the name field value from the form in your upload function. This tells multer which field on the request it should look for the files in. If these fields aren’t the same in the HTML form and on your server, your upload will fail:

const multer = require('multer')
const upload = multer({ dest: './public/data/uploads/' })
app.post('/stats', upload.single('uploaded_file'), function (req, res) {
// req.file is the name of your file in the form above, here 'uploaded_file'
// req.body will hold the text fields, if there were any
console.log(req.file, req.body)
});
