import model from '../../db/models';
import { Request, Response } from "express";

const { User, UserRole, Category, MedTest } = model;
const USER_ROLE_USER = 'USER';
export default {


  /*async fillUp(req: Request, res: Response) {
    return await User.create({
      firstName: 'Mick',
      lastName: 'Broadstone',
      roles: [{
        roleName: USER_ROLE_USER,
      }],
      categories: [{
        name: USER_ROLE_USER,
      }],
      tests: [{
        name: 'testName',
        type: 'testtype'
      }],
    }, {
      include: [{
        // association: MedTest.users,
        // include: [ Category, MedTest, UserRole ]
      }]
    });
  },*/

  async getAll(req: Request, res: Response) {
    const users = await User.find;
    const categories = await Category.findAll();
    const tests = await MedTest.findAll();
    const roles = await UserRole.findAll();
    users[0].categories = categories;
    users[0].roles = roles;
    users[0].tests = tests;

    return res.status(200).send(users);
  }
}
