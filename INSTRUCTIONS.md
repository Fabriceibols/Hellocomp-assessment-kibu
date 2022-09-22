# Technical Assessment
In this short assessment you are required to create a tree structure showing the hierarchy of employees in a business. You need to combine the staff members with the categories into one tree structure that has the following output (however based entirely on the data provided by the two constants in the main.js file):

* Terry Cats - Chief Creative Officer: Executive
    * Nick Thompson - Head of Design: Operations
        * Nick Jenson - Intern designer: Interns
* Bruce Davids - Chief Strategy Officer: Executive
    * David Smith - Head of Development: Operations
    * John Jones - Head of Marketing: Operations
    * Jane Sampson - Head of Content: Operations
    * Simon Says - Head of Strategy: Operations
* Bill Bass - Chief Executive Officer: Executive

The main.js file contains two constants for staff members and categories already. Each staff member has a unique identifier (slug) as well as an indication of who they report to. The categories each contain a unique identifier (slug) and a reference to the parent category.

If a category does not have a parent, it is a top level category. If the staff member does not have a report then they exist along side other staff members in their designated category.

How you approach this is entirely up to you.