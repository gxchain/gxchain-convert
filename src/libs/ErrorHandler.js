const handler = function(resp) {
  const message =
    resp && resp.response && resp.response.data && resp.response.data.message;
  return message || '未知错误';
};

export default handler;
