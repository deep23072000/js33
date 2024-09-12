public class JdbcDriverCheck {
    public static void main(String[] args) {
        try {
            // Attempt to load the JDBC driver class
            Class.forName("com.mysql.cj.jdbc.Driver"); // For MySQL
            // Class.forName("org.postgresql.Driver"); // For PostgreSQL
            // Class.forName("oracle.jdbc.driver.OracleDriver"); // For Oracle
            
            System.out.println("JDBC Driver is available.");
        } catch (ClassNotFoundException e) {
            System.out.println("JDBC Driver not found.");
            e.printStackTrace();
        }
    }
}