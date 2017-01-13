class Api::AttendeesController < ApplicationController
  def create
    @attendee = Attendee.new(attendee_params)
    if @attendee.save
      @event = @attendee.event
      render "api/events/show"
    else
      render json: @attendee.errors.full_messages, status: 422
    end
  end

  def destroy
    attendee = Attendee.find(params[:id])
    @event = attendee.event
    attendee.destroy
    render "api/events/show"
  end

  def attendee_params
    params.require(:attendee).permit(:attendee_id, :event_id)
  end
end
