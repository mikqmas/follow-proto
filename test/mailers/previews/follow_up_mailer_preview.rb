# Preview all emails at http://localhost:3000/rails/mailers/follow_up_mailer
class FollowUpMailerPreview < ActionMailer::Preview
  def sample_mail_preview
    FollowUpMailer.sample_email(User.first)
  end
end
