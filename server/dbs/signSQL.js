/**
 * Created by lmy on 18-1-26.
 */
const signSQL = {
    insert: 'insert into user(name,password) values(?,?)',
    findId: 'select * from user where name=?',
    insertInfo:'insert into student(user_id,stu_name,sex,major_class,github,blog) values(?,?,?,?,?,?)',
    updateUser:'UPDATE user SET name=?,password=? where user_id=?',
    updateStu: 'UPDATE student SET stu_name=?,sex=?,major_class=?,github=?,blog=? where stu_id=?',
    updateType: 'UPDATE user SET type=? where user_id=?',
    myAllUser:'select * from user',
    myAllStudent:'select * from student',
    deleteStu:'delete from student where stu_id=?',
    deleteUser: 'delete from user where user_id=?',
    userInfo: 'select * from user where user_id=?',
    stuInfo: 'select * from student where user_id=?'
};

module.exports = signSQL;