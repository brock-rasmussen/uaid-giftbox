# uaid-giftbox
UAID’s mission is “to support individuals with intellectual and developmental disabilities and their families by providing opportunities that enhance their quality of life.”

UAID’s most work-intensive undertaking is their semi annual Gift Box program, which helps provide basic needs items to individuals with intellectual disabilities who may be low income, live in group homes, and/or receive meager benefits from SSI.

Each holiday season UAID receives over 1500 recipient applications and over 80% of them are adopted. Each application and each adoption form was received on paper, and each had to be manually entered into excel spreadsheets.

The UAID Giftbox web application aims to make the application and adoption process much more convenient for applicants and adopters, and a gigantic time-saver for UAID and its volunteers.

## Changes to the Scope
We originally anticipated building the Giftbox web application using PHP and extending UAID's current WordPress site to accomodate it. As the development process began we realized it would be much easier to develop and maintain if we completely separated the Giftbox web application from the WordPress site (except a link between them) and used JavaScript instead of PHP. The table below will list changes to the scope based on feature

| Feature | Content/Functionality | Process | Changes |
| --- | --- | --- | --- |
| Giftbox Overview | Provides information about the giftbox program, displays GBR's available for adoption and contains a gallery of images related to the program | _**Angular / Firebase**_ | We originally planned on creating a WordPress page for this. This page will now be created with Angular and hosted with FireBase. It will stylistically match the wordpress site. Content for the image gallery will be dependent on the client, and will be cut from the scope if assets are not received before the deadline. |
| Adopt | Includes GBR's first name, age, intellectual age, and their wishlist. Also includes general guidelines for the sponsor and terms of agreement | _**Angular / Firebase**_ | Content will remain the same, but like the Giftbox Overview it will not be on WordPress, but created with Angular and hosted with FireBase. |
| Donate | Includes links to PayPal with multiple payment options (monthly with different monthly amounts, one time payment), and information on how the money is used | WordPress | After discussion, it was decided that several of the pages on the current WordPress site were unnecessary and could easily be merged. The current donation configuration with PayPal meets the needs of payment options, but further information on other methods of donations (by mail, money drop off, Amazon Smile) have been included. The Donate page was added into the Ways to Help page. |
| Volunteer | Provides information about volunteer opportunities, potential eagle scout projects, and contains a call to action. | WordPress | The Ways to Help page is the hub of information on volunteering and contributing to UAID. This page could be called the volunteer page as we originally defined it, but with the donation information included. The call to action in the volunteer section will point the user to the contact us page so they can get in touch with UAID to learn how they can help out. |
| Refer GBR | Asks for necessary information about GBR and the referrer. Creates an account for the referrer to help manage all the referrals they make. | _**Angular / Firebase**_ | This page will no longer be on WordPress, but on FireBase. Referrers will not have an account created for them, but will have to input their information with each form submission |
| Adoptions | Provides a list of adopted GBRs for sponsor to refer to in order to review GBR wishlist items. | _**Removed**_ | Sponsors will receive emails with wishlists and GBR information. It isn't necessary for a page to be built to meet a need that has already been met. |
| Email | Emails will be sent periodically to sponsors, intially with GBR wish list items, followed by friendly reminder with information on how to fulfill the commitment. | _**Angular / Firebase**_ | Emails will be sent out with a node package and script instead of using PHP. |

## Changes to the Structure
As stated in the last section, some of the pages were deemed unnecessary and important information was merged into other pages.

The old structure was:

```
Home
| - About Us
	| - Our Mission
	| - Who We Are
	| - Who We Serve
| - Support Us
	| - Volunteer
	| - Ways To Help
	| - Wish List
| - Programs
	| - Holiday Gift Box
	| - Adopt Now
| - Blog
| - Contact
```

The revised structure is:

```
Home
| - About Us
  | - Who We Are
  | - Who We Serve
| - Ways to Help
| - Our Programs
  | - Holiday Gift Box
    | - Adopt Individual
    | - Refer
| - Contact Us
```
