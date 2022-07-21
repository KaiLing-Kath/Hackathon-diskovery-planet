export const getComments = async () => {
  return [
    {
      id: "1",
      body: "Pluto is a planet",
      username: "Kathleen",
      userId: "1",
      parentId: null,
      createdAt: "Wed, 12 May 2022 03:20:47 GMT",
    },
  ];
};

export const createComment = async (text, parentId = null) => {
  return {
    id: Date.now(),
    body: text,
    parentId,
    userId: "1",
    username: "Esther", // need to export name

    createdAt: new Date().toUTCString(),
  };
};

export const updateComment = async (text) => {
  return { text };
};

export const deleteComment = async () => {
  return {};
};
