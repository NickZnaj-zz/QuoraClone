class Api::SearchesController < ApplicationController

  def index
    @search_results = PgSearch
      .multisearch(params[:query])
      .page(params[:page])

    render :index
  end

end
