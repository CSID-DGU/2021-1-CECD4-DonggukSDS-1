module.exports = {
    selectNoticeAll: "select * from notice ORDER BY id DESC",
    selectNoticeById: "select * from notice where id=?",

    insertNotice: "insert into notice(title, content, author) VALUES (?, ?, ?)"
};