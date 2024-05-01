class likeService {
  constructor(likeRepository) {
    this.likeRepository = likeRepository;
  }

  async createLike(likeData) {
    const newLike = await this.likeRepository.createLike(likeData);
    return newLike;
  }
}

module.exports = likeService;