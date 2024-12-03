Authentication - process of identifying who the user is/identity of the user

Authorisation - process of identifying what the user has access to - "Authorised Personnel only"

Authentication -> Authorisation

e-commerce

/products - anyone
/products/buy - Authentication (customerA)
/products/create - customerA is not Authorised

/products - anyone
/products/buy - Authentication (sellerA)
/products/create - sellerA is authorised

/masailms -
/masailms/auth_lecture -> authentication
/masailms/auth_lecture/create -> student who is authenticated

student A
IA M

/signing up -
{
name,
password,
age,
city,
role : "student"
}

             /signup
                name, password,age, city

/lms/assignments/edit ->
check Authentication -> verifying the token ? checkAuthorisation : Please login again

               checkAuthorisation ->
                                       1. Know the role - User = userMOdel.find({id}) - User.role?
                                       2. User.role === "student" ? "Not authroised" : go ahead

/lms/studentFeedback ->
check Authentication -> token ? checkAuthorisation : Login again

                 checkAuthorisation ->
                                    1. Know the role - User.role?
                                    2. User.role === "student" ? : "Go ahead" : "not authorised"





                  1. role -> seller/customer/student/IA/instructor etc ...
                  2. Which role has which permission
