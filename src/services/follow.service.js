class followService {
  constructor(followRepository) {
    this.followRepository = followRepository;
  }

  async createFollow(followData) {
    const newFollow = await this.followRepository.createFollow(followData);
    return newFollow;
  }
}

module.exports = followService;