const endpoints = {
    login: "/auth/login/",
    logout: "/auth/logout/",
    user: "/auth/user/",
    registration: "/auth/registration/",
    tasks: "/api/v1/tasks",
    detectors: "/api/opentpod/v1/detectors",
    detectorDownloadField: "model",
    trainsets: "/api/opentpod/v1/trainsets",
    media: "/media/",
    mediaData: "/media/data/",
    // front end handled routes
    uiVideo: "/video",
    uiLabel: "/label", // TODO (junjuew): still need this?
    uiAnnotate: "/annotate",
    uiDetector: "/detector"
};
export { endpoints };
