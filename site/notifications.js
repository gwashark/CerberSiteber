const origin = window.location.origin;
window.OneSignalDeferred = window.OneSignalDeferred || [];

config = {
  appId: "",
  safari_web_id: "",
  notifyButton: {
    enable: window.matchMedia("(display-mode: standalone)").matches,
  },
  welcomeNotification: {
    title: "The fun is just getting started!",
    message: "Thanks for subscribing! You'll get the latest when it's available.",
  },
  promptOptions: {
    slidedown: {
      prompts: [
        {
          type: "category",
          autoPrompt: true,
          delay: {
            pageViews: 2,
            timeDelay: 15,
          },
          text: {
            actionMessage: "Would you like to receive notifications about new content?",
            acceptButton: "Yes, please!",
            cancelButton: "No, thanks.",

            updateMessage: "What would you like to change?",
            negativeUpdateButton: "Nevermind.",
            positiveUpdateButton: "I'm Done!"
          },
          categories: [
            {
              label: "Timeline Updates",
              tag: "timeline_updates"
            },
            {
              label: "Twitch Notifications",
              tag: "live_twitch"
            },
            {
              label: "Daily Clips",
              tag: "daily_clips"
            },
            {
              label: "Other Fun",
              tag: "other"
            }
          ]
        }
      ]
    }
  },
  allowLocalhostAsSecureOrigin: true,
};

if (origin.startsWith("http://")) {
  config.appId = "e4f86786-d4fb-428e-af1f-b9809efbeda1";
  config.safari_web_id =
    "web.onesignal.auto.44daf2d6-544c-403f-a3b6-3ab51abe3e37";
} else {
  config.appId = "92afa6f9-6836-437e-8897-ec3a41d26a1f";
  config.safari_web_id =
    "web.onesignal.auto.1172fa5f-6e39-45ba-9a29-ceb4d8311220";
}

OneSignalDeferred.push(async function (OneSignal) {
  await OneSignal.init(config);
});
