json.array!(@votes) do |vote|
  json.partial!('vote', vote: vote)
end
