import initModels from "../../models/initModels.js";

const { Student, IndividualWork } = initModels();

export default class IndividualWorkRepository {
  static async getAllIndividualWorkByStudentId(studentId) {
    const individualWorks = await IndividualWork.findAll({
      where: { studentId },
    });

    if (!individualWorks) {
      return null;
    }

    return individualWorks;
  }

  static async createIndividualWork(studentId, data) {
    await IndividualWork.create({
      ...data,
      studentId,
    });
  }

  static async updateIndividualWork(id, data) {
    const { workDate, participant, workContent } = data;
    await IndividualWork.update(
      { workDate, participant, workContent },
      { where: { id } }
    );
  }

  static async deleteIndividualWork(id) {
    await IndividualWork.destroy({ where: { id } });
  }
}