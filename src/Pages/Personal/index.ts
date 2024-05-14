enum OptionBar {
  Post = 1,
  Personal = 2,
  Image = 3,
  Video = 4,
  Friends = 5,
  History = 6,
}

const listOptionBar = [
  {
    name: "Bài đăng",
    optionBar: OptionBar.Post,
  },
  {
    name: "Thông tin",
    optionBar: OptionBar.Personal,
  },
  {
    name: "Hình ảnh",
    optionBar: OptionBar.Image,
  },
  {
    name: "Video",
    optionBar: OptionBar.Video,
  },
  {
    name: "Bạn bè",
    optionBar: OptionBar.Friends,
  },
  {
    name: "Lịch sử",
    optionBar: OptionBar.History,
  },
];

export { OptionBar, listOptionBar };
