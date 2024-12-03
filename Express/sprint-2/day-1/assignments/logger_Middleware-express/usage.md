Note: This page was generated from the multer README.
Multer Build Status NPM version js-standard-style
Multer is a node.js middleware for handling multipart/form-data, which is primarily used for uploading files. It is written on top of busboy for maximum efficiency.

NOTE: Multer will not process any form which is not multipart (multipart/form-data).

Translations
This README is also available in other languages:

Installation
$ npm install --save multer
Usage
Multer adds a body object and a file or files object to the request object. The body object contains the values of the text fields of the form, the file or files object contains the files uploaded via the form.

Basic usage example:

Don’t forget the enctype="multipart/form-data" in your form.

<form action="/profile" method="post" enctype="multipart/form-data">
  <input type="file" name="avatar" />
</form>
