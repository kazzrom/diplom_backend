import initModels from "../../models/initModels.js";

const { GroupMeeting } = initModels();

export default class GroupMeetingRepository {
  static async getProtocolsByGroupId(groupId) {
    const protocols = await GroupMeeting.findAll({ where: { groupId } });

    if (!protocols) {
      return null;
    }

    return protocols;
  }

  static async createProtocol(data) {
    const createdProtocol = await GroupMeeting.create(data);

    const newProtocol = await GroupMeeting.findByPk(createdProtocol.id);
    return newProtocol;
  }

  static async updateProtocol({ id, data }) {
    await GroupMeeting.update(data, { where: { id } });
  }

  static async deleteProtocol(id) {
    await GroupMeeting.destroy({ where: { id } });
  }
}
