/**
* This is the HomePage kind, displays the authenticated user's home page
*
* - setupPageBody() Implemented child method
*/
enyo.ready(function() {
  enyo.kind({
    name: 'Bootplate.HomePage'
    , kind: 'Bootplate.ParentPage'
    , id: 'homePage'
    , authFlag: true // used to help determine if user has access to this page
    // This checks to see if the user is allowed on this page
    , rendered: function() {
        this.inherited(arguments);
    }
    , setupPageBody: function(owner) {
        owner.render();
    } // end setupPageBody
  });
});

















