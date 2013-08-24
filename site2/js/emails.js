$(function(){
    var emails = [
        {"subject":"Chrome 28 arrives wtih Blink, rich notifications", "website":"thenextweb.com", "date":"5d", "tag":"1"},
        {"subject":"IFTTT comes to iPhone with a crispy app featureing", "website":"thenextweb.com", "date":"5d", "tag":""},
        {"subject":"Teehan+Lax Hack Day", "website":"vimeo.com", "date":"1w", "tag":""},
        {"subject":"New cofee", "website":"There's some Flywheel's Ethipian in the kitchen. $14", "date":"1w", "tag":"1"},
        {"subject":"The Twitter Bootstrap Mixins", "website":"ely-s.github.io", "date":"1w", "tag":""},
        {"subject":"Gallerio Blog", "website":"blog.galler.io", "date":"1w", "tag":""},
        {"subject":"Dolo", "website":"itunes.apple.com", "date":"1w", "tag":"4"},
        {"subject":"Tasty Burger Cooks Up Fried Cheeseburgers", "website":"www.bostonmagazine.com", "date":"1w", "tag":""},
    ]

    var email_template = '<div class="email"> \
                            <div class="picture left"><img class="circle small" src="http://placekitten.com/25/25"></div> \
                            <div class="info"> \
                                <h4 class="subject">{subject}</h4> \
                                <p class="website muted">{website}</p> \
                            </div> \
                            <div class="date right"> \
                                <div class="date muted small">{date}</div> \
                                <div class="tag">{tag}</div> \
                            </div> \
                          </div>'
    var email_list = $('.email-list')
    $.each(emails, function(key, value){
        email = email_template.replace('{subject}', value['subject'])
        email = email.replace('{website}', value['website'])
        email = email.replace('{date}', value['date'])
        var tag = '';
        if(value['tag']){
            tag = "<div class='badge'>"+value['tag']+"</div>"
        }
        email = email.replace('{tag}', tag)
        email_list.append(email)
    })
})