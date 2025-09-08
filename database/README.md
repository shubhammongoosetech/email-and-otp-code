# what is database schema?

it is blueprint of the database that we will create. how we will store data , structure of table , etc defined inside it.

# what is function dependency?

1. row refer as a touple
2. coloumn refer as a properties / artibutes
3. it defines a relationship between to atributes
   X --> Y where Y is depended on X ( X is Determent Y is Depened)
4. Y depends on X means that for every valid value of x we can uniquely identify Y
5. for example - emp_id --> e_name and emp_id --> salary so we can uniquely identify emp_name by the emp_id
6. emp_id --> e_name and emp_id --> salary --> this is function dependency
7. emp_name --> e_salary --> this is not a function dependenc y beacouse we can not indetify salary by emp_name beacouse meny emp have same name


