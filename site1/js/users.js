$(function(){
    var users = [
        {'status': 'online', 'name': 'Alex Penny'},
        {'status': 'away', 'name': 'Alan Grinshtein'},
        {'status': 'busy', 'name': 'Glenn Danzig'},
        {'status': 'offline', 'name': 'Jello Biafra'},
        {'status': 'online', 'name': 'Alex Penny'},
        {'status': 'away', 'name': 'Alan Grinshtein'},
        {'status': 'busy', 'name': 'Glenn Danzig'},
        {'status': 'offline', 'name': 'Jello Biafra'},
        {'status': 'online', 'name': 'Alex Penny'},
        {'status': 'away', 'name': 'Alan Grinshtein'},
        {'status': 'busy', 'name': 'Glenn Danzig'},
        {'status': 'offline', 'name': 'Jello Biafra'},
        {'status': 'online', 'name': 'Alex Penny'},
        {'status': 'away', 'name': 'Alan Grinshtein'},
        {'status': 'busy', 'name': 'Glenn Danzig'},
        {'status': 'offline', 'name': 'Jello Biafra'},
        {'status': 'online', 'name': 'Alex Penny'},
        {'status': 'away', 'name': 'Alan Grinshtein'},
        {'status': 'busy', 'name': 'Glenn Danzig'},
        {'status': 'offline', 'name': 'Jello Biafra'},
    ]

    var contacts_list = $('<ul>')
    var contact_count = 0

    $.each(users, function(key, value){
        var status_dot, name;
        var contact = $('<li>')
        name = value['name'];
        status_dot = $("<span>").addClass('icon-circle icon-small ' + value['status'])
        if(value['status'] == 'online') contact_count++;
        contact.append(status_dot).append(name)
        contacts_list.append(contact)
    })
    var friends_online = $("<li>").html('<strong>Contacts('+contact_count+')</strong>')
    $('.contacts').append(friends_online).append(contacts_list)
})