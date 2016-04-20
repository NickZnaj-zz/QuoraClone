json.meta do
  json.total_pages @search_results.total_pages
  json.query params[:query]
  json.page @search_results.current_page
end

json.search_results do
  json.array! @search_results.map(&:searchable) do |search_result|
    case search_result
    when Topic
      json.partial! "api/topics/topic", topic: search_result
    when Question
      json.partial! "api/questions/question", question: search_result
    when User
      json.partial! "api/userss/user", user: search_result
    end
    json._type search_result.class.to_s

  end
end
