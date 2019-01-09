# bcrypt-generate
Create a bcrypt hash using bcryptjs module in the command line

# How to use?

 1. Download or clone project
 2. Install dependencies (npm install)
 3. Run this command at root of project: `node index --text=text_to_generate_hash --salt=number_of_salt_round`
 
That is all!!! On the console, should appear the generated hash from text parameter applying the salt value.

# Example
`node index --text=mypasswd --salt=10`

# Support
If you are having general issues with this package, feel free to contact me on [Twitter](https://twitter.com/mlezcano1985).

If you believe you have found an issue, please report it using the [GitHub issue tracker](https://github.com/mlezcano1985/bcrypt-generate/issues), or better yet, fork the repository and submit a pull request.

If you're using this package, I'd love to hear your thoughts. Thanks!
