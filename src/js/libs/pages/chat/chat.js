export function initChat() {
  return {
    chatBodyOpened: true,
    closeChatPanel() {
      this.chatBodyOpened = !this.chatBodyOpened;
    },

    activeConversation: "dan",
    activeConversationUser: "Dan Walker",
    activeConversationUserPhoto: "/img/avatars/dan.jpg",
    activeConversationUserStatus: "Online",

    switchConversation(e) {
      const conversation = e.target.getAttribute("data-chat-user");
      const username = e.target.getAttribute("data-full-name");
      const userPhoto = e.target.getAttribute("data-picture");
      const status = e.target.getAttribute("data-status");

      this.activeConversation = conversation;
      this.activeConversationUser = username;
      this.activeConversationUserStatus = status;
      this.activeConversationUserPhoto = userPhoto;
      this.chatBodyOpened = true;
      console.log("CONV: " + this.activeConversation);
    },

    newConversationModalOpened: false,
    toggleConversationModal() {
      this.newConversationModalOpened = !this.newConversationModalOpened;
    },

    newConversationUserSelected: false,
    selectedUserPhoto: '',
    selectedUserName: '',
    selectedUserPosition: '',
    selectUser(e) {
      const username = e.target.getAttribute("data-username");
      const userPhoto = e.target.getAttribute("src");
      const position = e.target.getAttribute("data-position");

      this.selectedUserPhoto = userPhoto;
      this.selectedUserName = username;
      this.selectedUserPosition = position;

      this.newConversationUserSelected = true;
    },
    cancelSelection() {
      this.newConversationUserSelected = false;
    },
  };
}
