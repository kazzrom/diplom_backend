import GroupMeetingService from "../../services/Protocols/GroupMeetingService.js";

export default class GroupMeetingController {
  static async getProtocolsByGroupId(req, res) {
    try {
      const response = await GroupMeetingService.getProtocolsByGroupId(
        req.groupId
      );
      res.status(200).send(response);
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  }

  static async createProtocol(req, res) {
    try {
      const response = await GroupMeetingService.createProtocol({
        data: req.body,
        groupId: req.groupId,
      });
      res.status(201).json(response);
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  }

  static async updateProtocol(req, res) {
    try {
      const { id } = req.params;
      await GroupMeetingService.updateProtocol({ id, data: req.body });
      res.sendStatus(204);
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  }

  static async deleteProtocol(req, res) {
    try {
      const { id } = req.params;
      await GroupMeetingService.deleteProtocol(id);
      res.sendStatus(204);
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  }
}
