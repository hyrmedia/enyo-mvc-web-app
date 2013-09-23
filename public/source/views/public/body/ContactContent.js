/**
* Contact page
*
* - setupBodyContent()
*/
enyo.ready(function() {
  enyo.kind({
    name: "Bootplate.ContactContent"
    , kind: "Bootplate.ParentContent"
    , id: 'contactContent'
    , authFlag: false
    , published: {
        contentComponent: null
    }
    // This checks to see if the user is allowed on this page
    , rendered: function() {
        this.inherited(arguments);
    }
    , setupBodyContent: function(owner, renderFlag) {

        this.insertFormSpace(owner);
        owner.createComponent({
          tag: 'a'
          , id: 'tag_contact'
          , attributes: {
              target: '_blank'
            , href: 'https://github.com/pcimino/enyo-mvc-app'
          }
          , content: "Github Repo for this project"
          , classes: "form-field-left-margin"
          , kind: 'enyo.Control'
        });
        this.insertBreak(owner);
        this.insertBreak(owner);
        this.insertInternalLink(owner, this.rndLink('login'), 'User Login');

        // only call this on navigation, not initial load
        if (renderFlag) owner.render();
    } // end setupBodyContent
  });
});






