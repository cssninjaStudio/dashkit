export function initForumTopic() {
  return {
    isReplyActive: false,
    toggleReplyBox() {
      this.isReplyActive = !this.isReplyActive;
    },

    replyPlaceholder: "",
    initReplyBox() {
      const topicTitle = "Payment now supports cryptocurrencies";
      this.replyPlaceholder = 'Reply to "' + topicTitle;
      +'"';
    },
  };
}
