import { Op } from "sequelize";
import initModels from "../../models/initModels.js";

const { Student, FamilyMember, MemberPersonalData } = initModels();

export default class OrphansRepository {
  static async getRecords(groupId) {
    const orphans = await Student.findAll({
      where: { groupId },
      include: {
        model: FamilyMember,
        where: {
          [Op.not]: {
            relation: { [Op.or]: ["Мать", "Отец", "Опекун", "Брат", "Сестра"] },
          },
        },
        include: [MemberPersonalData],
      },
    });

    if (!orphans) {
      return null;
    }

    return orphans;
  }
}
