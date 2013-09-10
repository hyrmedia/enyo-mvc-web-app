/**
* This is the HomeContent kind, displays the authenticated user's home page
*
* - setupBodyContent() Implemented child method
*/
enyo.ready(function() {
  enyo.kind({
    name: "Bootplate.HomeContent"
    , kind: "Bootplate.ParentContent"
    , id: 'homeContent'
    , authFlag: true // used to help determine if user has access to this page
    , bindings: [
    ]
    // This checks to see if the user is allowed on this page
    , rendered: function() {
        this.inherited(arguments);
    }
    , setupBodyContent: function(owner) {

        this.insertFormSpace(this);
        this.insertInternalLink(owner, 'updateMyUserInfo', 'Update My Account Info');
        this.insertBreak(owner);
        this.insertInternalLink(owner, 'updateMyPassword', 'Update My Password');
        this.insertBreak(owner);
        this.insertInternalLink(owner, 'logout', 'Logout');
/*
        // Administrative links
        this.insertBreak(owner);
        this.insertInternalLink(owner, 'readUserInfo', 'Read User Info', 'adminReadUserInfoLink');
        this.insertBreak(owner, 'adminReadUserInfoBreak');
        this.insertInternalLink(owner, 'readUserList', 'Search For Users', 'adminReadUserListLink');
        this.insertBreak(owner, 'adminReadUserListBreak');
        this.insertInternalLink(owner, 'updateUserInfo', 'Update User', 'adminUpdateUserLink');
        this.insertBreak(owner, 'adminUpdatedUserBreak');
        this.insertInternalLink(owner, 'deleteUser', 'Delete User', 'adminDeleteUserLink');
*/
        owner.render();
    } // end setupBodyContent
  });
});












