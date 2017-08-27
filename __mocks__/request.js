// __mocks__/request.js
const res = {
  status: 200
};

export default function request() {
  return new Promise((resolve, reject) => {
    process.nextTick(
      () => res.status === 200 ? resolve(res) : reject({
        error: 'request fail.',
      })
    );
  });
}