.env - dotenv
Having Mongo Database online -> MongoDB Atlas

Relationships -> It's just a way two or more people or things are connected - what

What
Why ->

Types :
one-one
one-many
many-many

_one - one_

user collection;
userID - 1001
name,
address,
blood_group,
phone_number

employees collection
empID, - 23
emp_salary,

students collection
stuID,
stu_course,
stu_batch,

Indepenent - User;
Dependent - employee

1.  adding the empID in user collection
    db.users.find({empID : 23})

                          OR

2.  adding the userID in employee collection;
    db.users.find({userId : 1001})

//2nd

_one - many_
1 Post - many comments

1st post - 10000 comments - 5 seconds;
2nd post - 50 comments; - 1 second;
3rd post - 10 commments; - 1 second;
4th post - 1 comment; - 0.5 second;
5th post - 500 comments - 2 seconds

post_collection
{
post_id
post_time,
post_title,
no_of_reactions,
no_of_comments,
image_url,  
 }

comments_collection
{
post_id
comment_id
comment_title,
no_of_reactions
}
{  
 post_id
comment_id
comment_title,
no_of_reactions
}

//1st way - post_id in each of the comments
OR
//2nd way - putting comments_id in post collection

//1

_many to many_

1. questions
   {
   question_id
   tags : [tags_id, tags_id]
   }
2. tags - js, react, php,html,

{
tag : js,
questions : [question_id, question_id]
}

1st way - putting question_id in each tag collection;
OR
2nd way - puttings tags_id in question collections

1 OR 2

Parent - Child
Independent - dependent

We will always put Independent's ID in dependent
We will always put Parent's ID in child

// user -> enters height and weight -> BMI value

//user 1
/addDetails -> h and w, -> calcBMI -> return BMI - 10 - {h, w, BMI}

//user 2
/addDetails -> h and w -> calcBMI -> return BMI - 9

//user 3
/addDetails -> h and w -> calcBMI -> return BMI - 15

//user 1
/addDetails -> h and w -> calcBMI -> return BMI - 11 - {1, h, w, BMI}

db.bmi.find()
