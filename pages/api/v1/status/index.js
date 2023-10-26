function status(request, response) {
  response.status(200).json({ chave: "ola todo mundo" });
}

export default status;
