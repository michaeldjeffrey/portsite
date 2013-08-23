$(function(){
    var users = [
        {'status': 'online', 'name': 'Alex Penny'},
        {'status': 'offline', 'name': 'Allan Grinshtein'},
        {'status': 'online', 'name': 'Ana-Gabriel Stroe'},
        {'status': 'online', 'name': 'Brian Benitez'},
        {'status': 'offline', 'name': 'Bruno Martins'},
        {'status': 'offline', 'name': 'Cris Labno'},
        {'status': 'busy', 'name': 'Dalton Hurd'},
        {'status': 'away', 'name': 'Daniel Sandvik'},
        {'status': 'offline', 'name': 'Daniela Alves'},
        {'status': 'online', 'name': 'Helder Oliveria'},
        {'status': 'away', 'name': 'Ilja Broderick'},
        {'status': 'offline', 'name': 'Jonathan Moreira'},
        {'status': 'online', 'name': 'Jose Alves da Silva'},
        {'status': 'busy', 'name': 'Liam McKay'},
        {'status': 'online', 'name': 'Linda Eliasen'},
        {'status': 'offline', 'name': 'Martin Oberhauser'},
        {'status': 'offline', 'name': 'Mason Yarnell'},
        {'status': 'offline', 'name': 'Mike McAlister'},
        {'status': 'busy', 'name': 'Ole Kristian'},
        {'status': 'online', 'name': 'Ryan Ford'},
        {'status': 'online', 'name': 'Scoot Hills'},
        {'status': 'away', 'name': 'Time Silva'},
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
    $('.contacts').prepend(contacts_list).prepend(friends_online)
})