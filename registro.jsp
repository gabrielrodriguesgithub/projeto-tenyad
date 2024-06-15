<%-- <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <% 

        String nome = request.getParameter("txtNome");
        String email = request.getParameter("txtEmail");
        String senha = request.getParameter("txtSenha");

        out.print("Nome: " + nome);
        out.print("<br>");

        out.print("Email: " + email);
        out.print("<br>");

        out.print("Senha: " + senha);
    %>
</body>
</html> --%>


<%@page language="java" import="java.sql.*"%>

<% 
    String vnome = request.getParameter("txtNome");
    String vemail = request.getParameter("txtEmail");
    String vsenha = request.getParameter("txtSenha");

    String database = "web";
    String endereco = "jdbc:mysql://localhost:3306/" + database;
    String usuario = "root";
    String senha = "";

    String driver = "com.mysql.jdbc.Driver";

    Class.forName(driver);

    Connection conexao;

    conexao = DriverManager.getConnection(endereco, usuario, senha);

    String sql = "insert into usuarios (nome, email, senha) values (?,?,?)";

    PreparedStatement stm = conexao.prepareStatement(sql);

    stm.setString(1, vnome);
    stm.setString(2, vemail);
    stm.setString(3, vsenha);

    stm.execute();
    stm.close();
    out.print("<h2>Dados gravados com sucesso</h2>");

    String sqlGet = "SELECT * FROM usuarios;";
    PreparedStatement stmGet = conexao.prepareStatement(sqlGet);

    ResultSet dados = stmGet.executeQuery();
%>

<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Dados do Usuário</title>
    <link rel="stylesheet" href="style/login.css">
</head>
<body>
    <h2>Dados recebidos agora</h2>
    <table border="1">
        <tr>
            <th>Nome</th>
            <th>Email</th>
            <th>Senha</th>
        </tr>
        <tr>
            <td><%= vnome %></td>
            <td><%= vemail %></td>
            <td><%= vsenha %></td>
        </tr>
    </table>

    <h2>Todos os usuarios inseridos no banco</h2>
    <table border="1">
        <tr>
            <th>Nome</th>
            <th>Email</th>
            <th>Senha</th>
        </tr>
        <%
            while (dados.next()) {
        %>
        <tr>
            <td><%= dados.getString("nome") %></td>
            <td><%= dados.getString("email") %></td>
            <td><%= dados.getString("senha") %></td>
        </tr>
        <%
            }
            dados.close();
            stmGet.close();
            conexao.close();
        %>
    </table>
</body>
</html>
