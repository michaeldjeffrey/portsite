$(function(){
    var inbox = [
        {'checkmark': false, 'star': true, 'sender': 'Dribble', 'subject': '[Dribble] Work Inquiry from Google Inc.', 'date': 'Today, 11:01 PM', 'tag': '', 'tag-color': ''},
        {'checkmark': false, 'star': false, 'sender': 'Tim Silva, me (6)', 'subject': 'Encide needs more inviters', 'date': 'Today, 05:31 PM', 'tag': '', 'tag-color': ''},
        {'checkmark': true, 'star': false, 'sender': 'Daniel Sandvik, me (81)', 'subject': 'Job Proposal in Norway', 'date': 'Yesterday, 09:06 PM', 'tag': '', 'tag-color': ''},
        {'checkmark': false, 'star': false, 'sender': 'Twitter', 'subject': 'Someone Followed You', 'date': 'Nov 21', 'tag': 'Tag', 'tag-color': 'green'},
        {'checkmark': false, 'star': false, 'sender': 'Maria Sharapova', 'subject': 'Need some feedback please!', 'date': 'Nov 21', 'tag': '', 'tag-color': ''},
        {'checkmark': false, 'star': false, 'sender': 'deviantArt', 'subject': 'Congratulations! You have recieved a Daily Deviation', 'date': 'Nov 20', 'tag': '', 'tag-color': ''},
        {'checkmark': false, 'star': false, 'sender': 'ZWAME', 'subject': 'You have 1 unread message', 'date': 'Nov 19', 'tag': '', 'tag-color': ''},
        {'checkmark': false, 'star': false, 'sender': 'Agent Smith', 'subject': 'You hear that Mr. Anderson?...', 'date': 'Nov 19', 'tag': '', 'tag-color': ''},
        {'checkmark': true, 'star': false, 'sender': 'Fantasy Interactive', 'subject': 'New Case Studies', 'date': 'Nov 18', 'tag': 'Clients', 'tag-color': 'blue'},
        {'checkmark': false, 'star': true, 'sender': 'Travis Bickle, me (3)', 'subject': 'You talking to me?', 'date': 'Nov 18', 'tag': '', 'tag-color': ''},
        {'checkmark': false, 'star': false, 'sender': 'Ole Kristian', 'subject': 'New Windows 8 App', 'date': 'Nov 18', 'tag': '', 'tag-color': ''},
        {'checkmark': false, 'star': false, 'sender': 'me, Daryl Ginn (2)', 'subject': 'I am Batman, The Dark Knight', 'date': 'Nov 17', 'tag': '', 'tag-color': ''},
        {'checkmark': false, 'star': false, 'sender': 'Deftones', 'subject': '[Newsletter] KOIfalseYOKAN is out!', 'date': 'Nov 16', 'tag': '', 'tag-color': ''},
        {'checkmark': false, 'star': false, 'sender': 'Apple Inc.', 'subject': 'Retina Cinema Display coming in 2013', 'date': 'Nov 16', 'tag': '', 'tag-color': ''},
        {'checkmark': true, 'star': false, 'sender': 'HTC', 'subject': 'Job Opportunities in China, UI/UX Designer', 'date': 'Nov 16', 'tag': 'Opportunities', 'tag-color': 'red'},
        {'checkmark': false, 'star': false, 'sender': 'Facebook', 'subject': 'Please, sign in again!', 'date': 'Nov 16', 'tag': '', 'tag-color': ''},
        {'checkmark': false, 'star': true, 'sender': 'me, Girlfriend (69)', 'subject': 'Stop designing for a damn moment!', 'date': 'Nov 15', 'tag': '', 'tag-color': ''},
        {'checkmark': false, 'star': false, 'sender': 'Cat, me (3)', 'subject': 'Give me the damn food! I\'m hungry!', 'date': 'Nov 15', 'tag': '', 'tag-color': ''},
        {'checkmark': false, 'star': false, 'sender': 'Darth Vader', 'subject': 'When I left you I was but the learner. Now I am the master.', 'date': 'Nov 15', 'tag': '', 'tag-color': ''},
        {'checkmark': false, 'star': false, 'sender': 'Steve Jobs', 'subject': 'Design is a Funny Word', 'date': 'Nov 14', 'tag': '', 'tag-color': ''},
        {'checkmark': false, 'star': false, 'sender': 'Bad Client, me (201)', 'subject': 'Can you make it for "fashionable"? But...', 'date': 'Nov 14', 'tag': '', 'tag-color': ''},
    ]

    $.each(inbox, function(key, value){
        var checkmark, star, sender, subject, date, subjecttext;
        var subjecttext = value['subject']
        checkmark = $("<td>").html('<i class="icon-check-empty"></i>')
        star = $("<td>").html('<i class="icon-star-empty"></i>')
        sender = $("<td>")
        subject = $("<td>")
        date = $("<td>")

        sender.text(value['sender'])
        if(subjecttext.length > 30) {
            subjecttext = subjecttext.substring(0,30)+"...";
            if(value['tag']){
                subjecttext = subjecttext.substring(0,15)+"...";
            }
        }
        subject.text(subjecttext)
        date.text(value['date'])
        if(value['checkmark'] == true){
            checkmark.html('<i class="icon-check"></i>')
        }
        if(value['star'] == true){
            star.html('<i class="icon-star"></i>')
        }
        if(value['tag'] != ''){
            subject.prepend('<span class="badge '+value['tag-color']+'-badge">'+value['tag']+'</span>')
        }
        $(".left-pane table")
            .append($('<tr>')
                .append(checkmark)
                .append(star)
                .append(sender)
                .append(subject)
                .append(date)
            );

    })
})